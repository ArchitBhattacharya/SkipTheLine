from pydantic import BaseModel, field_validator
from typing import Optional, List
from datetime import datetime

# ── Auth ──────────────────────────────────────────
class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str
    phone: Optional[str] = None
    role: str  # validated in router to "customer" | "vendor"

class LoginRequest(BaseModel):
    email: str
    password: str

# ✅ NEW: Proper typed schema for the user object.
# Previously TokenResponse.user was typed as `dict`, losing all validation.
# Now GET /auth/me and PUT /auth/me both return this clean shape,
# which matches exactly what AppContext.User expects.
class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str] = None
    role: str
    # avatar is not stored in DB yet — always None from the server.
    # The frontend manages avatar choice locally in localStorage.
    avatar: Optional[str] = None

    class Config:
        from_attributes = True

class TokenResponse(BaseModel):
    access_token: str
    token_type: str
    user: dict  # kept as dict so login/register keep working without changes

# ✅ NEW: For PUT /auth/me — all fields optional so caller can patch only what changed.
class UpdateProfileRequest(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None


# ── Stall ─────────────────────────────────────────
class StallCreate(BaseModel):
    name: str
    category: str
    avatar: Optional[str] = None

class StallResponse(BaseModel):
    id: int
    name: str
    category: str
    avatar: Optional[str]
    image_url: Optional[str]
    rating: float
    owner_id: int

    class Config:
        from_attributes = True


# ── Menu ──────────────────────────────────────────
class MenuItemCreate(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    is_available: bool = True

class MenuItemResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    price: float
    is_available: bool
    stall_id: int

    class Config:
        from_attributes = True


# ── Orders ────────────────────────────────────────
class OrderItemIn(BaseModel):
    menu_item_id: int
    quantity: int

class OrderCreate(BaseModel):
    stall_id: int
    items: List[OrderItemIn]

# ✅ UPDATED: Status transition validation lives here via a Pydantic validator.
# This means ANY endpoint that accepts OrderStatusUpdate gets the guard for free —
# no need to repeat the check in every router function.
# The allowed flow matches VendorOrders.tsx exactly:
#   placed → preparing → ready → completed
ALLOWED_STATUSES = {"placed", "preparing", "ready", "completed"}

class OrderStatusUpdate(BaseModel):
    status: str

    @field_validator("status")
    @classmethod
    def status_must_be_valid(cls, v: str) -> str:
        if v not in ALLOWED_STATUSES:
            raise ValueError(
                f"Invalid status '{v}'. Must be one of: {', '.join(sorted(ALLOWED_STATUSES))}"
            )
        return v

class OrderItemResponse(BaseModel):
    id: int
    menu_item_id: int
    menu_item_name: str = ""
    price: float = 0.0
    quantity: int

    class Config:
        from_attributes = True

class OrderResponse(BaseModel):
    id: int
    token: str
    status: str
    queue_number: int
    total_price: float
    stall_id: int
    created_at: datetime
    items: List[OrderItemResponse]

    class Config:
        from_attributes = True