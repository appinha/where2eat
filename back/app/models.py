from app import db


class Restaurant(db.Model):
    __tablename__ = "restaurants"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    category = db.Column(db.String(32))
    opening_hours = db.Column(db.String(64))
    address = db.Column(db.String(128))
    phone = db.Column(db.String(11))

    def to_dict_json(self):
        return {
            "name": self.name,
            "category": self.category,
            "openingHours": self.opening_hours,
            "address": self.address,
            "phone": self.phone,
        }

    def __repr__(self):
        return f"Restaurant {self.name}"

