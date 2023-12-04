print('START MONGO INIT #################################################################');

db = db.getSiblingDB('jolly-wheel-of-wonders');

db.createUser(
    {
        user: 'admin',
        pwd: 'admin',
        roles: [{ role: 'readWrite', db: 'jolly-wheel-of-wonders' }],
    },
);

db.createCollection('users');
db.createCollection('games');

print('END MONGO INIT #################################################################');
