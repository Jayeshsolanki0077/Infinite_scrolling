function Users({item: {id,email,body}}) {
    return (
        <div className="col-sm-4 my-2">
            <div className="card shadow-sm w-100" style={{ minHeight: 225}}>
                <div className="card-body"> 
                    <img class="circular_image" src="http://placekitten.com/g/500/500"/>
                    <h6 className="card-subtitle m-2 text-muted text-center">{email}</h6>
                    <p className="card-text text-center">{body}</p> 
                </div>
            </div>
        </div>
    )
}

export default Users;