from database import SessionLocal, engine, Base
import models

Base.metadata.create_all(bind=engine)
db = SessionLocal()

# Add 4 stalls matching your frontend mock data
stalls = [
    models.Stall(name="Joe's Burger Shack", category="Burgers",   rating=4.5),
    models.Stall(name="Taco Fiesta",        category="Mexican",    rating=4.2),
    models.Stall(name="Pizza Palace",       category="Pizza",      rating=4.7),
    models.Stall(name="Sushi Station",      category="Japanese",   rating=4.8),
]
db.add_all(stalls)
db.commit()

# Add menu items for stall 1 (Joe's Burger Shack)
items = [
    models.MenuItem(name="Classic Burger",  price=149, stall_id=1, description="Juicy beef patty"),
    models.MenuItem(name="Cheese Burger",   price=179, stall_id=1, description="With extra cheese"),
    models.MenuItem(name="Veggie Burger",   price=129, stall_id=1, description="Plant based"),
    models.MenuItem(name="Tacos (3pc)",     price=159, stall_id=2, description="Corn tortilla"),
    models.MenuItem(name="Burrito",         price=199, stall_id=2, description="Stuffed with rice & beans"),
    models.MenuItem(name="Margherita",      price=249, stall_id=3, description="Classic tomato & mozzarella"),
    models.MenuItem(name="Pepperoni Pizza", price=299, stall_id=3, description="Extra pepperoni"),
    models.MenuItem(name="Salmon Nigiri",   price=199, stall_id=4, description="Fresh salmon"),
]
db.add_all(items)
db.commit()
db.close()

print("✅ Database seeded successfully!")