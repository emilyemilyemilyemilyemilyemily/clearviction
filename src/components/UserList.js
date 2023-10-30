import React from 'react';

const UserList = ({ users }) => {

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {users.map(user => (
                <div className="col" key={user.id}>
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">
                                <strong>Username:</strong> {user.username}<br />
                                <strong>Email:</strong> {user.email}<br />
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;