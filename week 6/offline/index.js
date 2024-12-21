const jwt = require("jsonwebtoken")
const JWT_SECRET = "Main_nahi_batunga!"
const contents= {
    "name": "Rohan",
    "id": 12345678
}

const newToken = jwt.sign(contents, JWT_SECRET )

console.log(newToken);

// In JWT don't do decode always do verify cuz everyone can decode jwts token but not every one can verify it 
