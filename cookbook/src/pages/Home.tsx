const Home = () => {
    const me = "angela.jpg";

    return (
        <section id="about" className="flexbox top-space">
            <div style={{margin: '50px 10px', padding: '10px'}}>
                <img src={me} width="300rem"></img>
                <h2 className="text-center">Angela</h2>
            </div>
            <div style={{margin: '10px', padding: '20px'}}>
                <h1>Meet the Chef</h1>
                <p>
                    Hello everyone! My name is Angela. Something about me is that I love food! I will always enjoy trying new foods, going to different restaurants, 
                    and being exposed to different cuisines. Through cooking, it has the ability to introduce you to fascinating cultures and traditions. 
                    Follow my personal favorite recipes and get immersed into the vast world of food!
                </p>
            </div>
        </section>
    );
};

export default Home;