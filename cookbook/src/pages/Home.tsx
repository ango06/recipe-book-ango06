

const Home = () => {
    const placeholder = "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=";

    return (
        <section className="flexbox top-space">
            <div style={{margin: '50px 10px', padding: '10px'}}>
            <img src={placeholder} width="300rem"></img>
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