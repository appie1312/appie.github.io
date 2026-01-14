function Carousel() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner text-center carrousel-custom bg-light">
                <div className="carousel-item active">
                    <h2>welcome to ToyStore</h2> <br />
                    <p>discover toys for every age and imagination</p>
                </div>
                <div className="carousel-item ">
                    <h2>Discover Fun</h2>
                    <p>Explore a world of creativity and joy with our diverse collection of toys.</p>

                </div>
                <div className="carousel-item">
                    <h2>Unleash Imagination</h2>
                    <p>From classic favorites to the latest trends, find the perfect toy to spark your child's imagination.</p>
                </div>
            </div>
        </div>
    );
}

export default Carousel;