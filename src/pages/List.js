import React from 'react';

function User({userData}) {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

function UserList() {
    const users = [
        {email: 'aixue1999@gmail.com', name: '이석'},
        {email: 'aixue19991@gmail.com', name: '이석1'},
        {email: 'aixue19992@gmail.com', name: '이석2'},
        {email: 'aixue19993@gmail.com', name: '이석3'}
    ]

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User userData={user} />
                ))}
            </tbody>
        </table>
    )
}

export default UserList;