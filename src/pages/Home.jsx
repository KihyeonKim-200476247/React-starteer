import React from "react";
import PageTitle from "../components/PageTitle"
import styles from "./Home.module.css";

const Home = () =>{
    return(
        <div className={`${styles.heroImage} d-flex align-items-center justify-content-center`}>
          <PageTitle title ="Home"/>
       
          <h1 className={`${styles.shadow} ${styles.title} text-white display-1 text-center`}>Cards Against Humanity</h1>
        </div>
    );
};

export default Home;