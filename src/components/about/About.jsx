import React from "react";
import img1 from "../../assets/img1.png";

function About() {
  return (
    <>
      <div className="w-full h-auto float-left mb-10">
        <div className="w-1/2 h-[500px] overflow-hidden float-left">
          <img
            src={img1}
            className="w-[90%] rounded-2xl ml-[5%] object-cover h-[90%] mt-[5%]"
          />
        </div>
        <div className="w-1/2 h-500px float-left text-md leading-10 text-justify p-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
          molestiae! Excepturi eligendi perferendis temporibus? Consequatur
          facilis dolores et modi debitis incidunt minus, sequi, dolorum libero
          error a suscipit laborum mollitia, fugit quos possimus repudiandae
          fuga minima porro tempora nostrum. Maiores optio cupiditate
          necessitatibus ex velit voluptatum officiis, rem nostrum est id
          reiciendis obcaecati voluptatem laboriosam, aut, harum dolore placeat!
          Iste cupiditate atque vitae commodi quia, soluta similique perferendis
          rerum ratione! At voluptatibus, aliquam culpa eaque, explicabo fuga
          odit reprehenderit repudiandae ipsum est quia reiciendis. Tempora,
          pariatur distinctio! Odio, sed modi! Dignissimos quo cum voluptate,
          iste totam quae deleniti hic reiciendis sed placeat blanditiis magni
          alias ullam, necessitatibus ipsam ad. Omnis incidunt eligendi iste
          eaque eius repellat at distinctio laudantium nesciunt commodi qui
          laboriosam, voluptatem cupiditate dicta quia suscipit earum ipsa
          molestiae reprehenderit quam. Id ex minus iure eos provident! 
        </div>
      </div>
    </>
  );
}

export default About;
