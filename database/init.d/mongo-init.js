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
db.users.insert({ name: 'Charles Francis Xavier', email: 'professor.x@example.com' });
db.users.insert({ name: 'Scott Summers', email: 'cyclops@example.com' });
db.users.insert({ name: 'Robert Louis Drake', email: 'iceman@example.com' });

print('END MONGO INIT #################################################################');
