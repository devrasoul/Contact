const Contact = () =>{
    return(       
        <div className="card col-md-4 mx-1">
            <section className="d-flex">
            <section className="d-flex flex-column">
                <img className="card-img-top" src="https://via.placeholder.com/200" alt="Card image cap"></img>
            </section>
            <div className="card-body flex-column">
                <h5 className="card-title">نام کامل</h5>
                <p className="card-text">تلفن: 141-987654</p>
            </div>
            <section className="d-flex justify-content-center flex-column">
                <button className="m-1 btn btn-success">👁</button>
                <button className="m-1 btn btn-warning">🖌</button>
                <button className="m-1 btn btn-danger">✖</button>
            </section>
            </section>
        </div>
    );
}

export default Contact