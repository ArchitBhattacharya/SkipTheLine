from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
import models, schemas, auth as auth_utils
import traceback

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register", response_model=schemas.TokenResponse)
def register(data: schemas.RegisterRequest, db: Session = Depends(get_db)):
    try:
        # Check if email already exists
        if db.query(models.User).filter(models.User.email == data.email).first():
            raise HTTPException(status_code=400, detail="Email already registered")

        user = models.User(
            name=data.name,
            email=data.email,
            password=auth_utils.hash_password(data.password),
            phone=data.phone,
            role=data.role
        )
        db.add(user)
        db.commit()
        db.refresh(user)

        token = auth_utils.create_token({"sub": str(user.id)})
        return {
            "access_token": token,
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "phone": user.phone,
                "role": user.role
            }
        }
    except HTTPException:
        # Re-raise HTTP exceptions (like 400) without wrapping them in a 500
        raise
    except Exception as e:
        db.rollback()
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Registration failed: {str(e)}")


@router.post("/login", response_model=schemas.TokenResponse)
def login(data: schemas.LoginRequest, db: Session = Depends(get_db)):
    try:
        user = db.query(models.User).filter(models.User.email == data.email).first()
        if not user or not auth_utils.verify_password(data.password, user.password):
            raise HTTPException(status_code=401, detail="Invalid email or password")

        token = auth_utils.create_token({"sub": str(user.id)})
        return {
            "access_token": token,
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "phone": user.phone,
                "role": user.role
            }
        }
    except HTTPException:
        raise
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Login failed: {str(e)}")