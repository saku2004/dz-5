function UsersList (props)  {
    console.log(props.users);
    return(
        <div>
            <ul>
            {
                props.users.map((user, key) =>{
                return(
                    <li style={{width: '50%', height: '100px', textAlign: 'center', marginLeft: '280px'}}>
                        <div>
                            {user.one}
                        </div>
                        <div>
                            {user.two}
                        </div>
                    </li>
            )
            })
            }
            </ul>
        </div>
    )
}

export default UsersList;