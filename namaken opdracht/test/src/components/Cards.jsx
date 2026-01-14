function Cards() {
    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 my-5">
            <div className="col">
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">New Toys</h5>
                    <p className="card-text">Discover new toys and games for your children.</p>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Top Sellers</h5>
                    <p className="card-text">Find the best-selling products in our store.</p>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Discounts</h5>
                    <p className="card-text">Check out our latest discounts and special offers.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Cards;
