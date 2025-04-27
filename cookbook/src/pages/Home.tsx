const Home = () => {
    const me = "angelas_pic.PNG";

    return (
        <section id="about" className="flexbox top-space">
            <div style={{margin: '50px 10px', padding: '10px'}}>
                <img src={me} width="300rem"></img>
                <h2 className="text-center">Angela Ngo</h2>
            </div>
            <div style={{margin: '10px', padding: '20px'}}>
                <h1>About the chef</h1>
                <p>Hello everyone. My name is Angela. Something about me is that I love food! I love trying new foods, going to different restaurants, 
                    and being exposed to different cuisines. Through cooking, it has the ability to expose you to fascinating cultures and traditions. 
                    Follow my recipes and get immersed into the world of food!</p>
            </div>
        </section>
    );
};

export default Home;