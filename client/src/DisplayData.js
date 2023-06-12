import { useQuery, gql } from "@apollo/client";
import * as React from 'react';

const getUsers = gql`
    query getUsers {
        users {
            id
            name
            password
        }
    }
`;

function DisplayData() {
    const { data, loading } = useQuery(getUsers);

    if (loading) {
        console.log("data is loading..");
    }

    if (data) {
        console.log(data.users);
    }

    return (
        <div>
            {data && data.users.map((user) => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>password: {user.password}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayData;