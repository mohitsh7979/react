import { useState } from "react";

function Newuse(){
     

    let [name,setname] = useState('')
 
    function getvalue(e){

        name = e.target.value;
        setname(name)
        setname(name)
        setname(name)

    }


    return(

        <>
          <input type="text" onChange={getvalue}/>
          <h1>My Name is {name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique rerum corporis accusamus repellat voluptatem ipsum, doloribus dolorem voluptate, consequatur, sed perferendis. Cumque illo est, {name} repudiandae expedita eveniet, delectus iusto voluptatibus laborum earum omnis, vero fugiat quibusdam debitis sed in voluptate laboriosam aliquid nihil cupiditate tenetur animi non. Aperiam eos non voluptatem consectetur perspiciatis. Nemo dolorem molestiae eveniet voluptate quisquam, iure placeat qui earum. Perspiciatis officiis cupiditate accusamus facere culpa nemo natus veritatis debitis. Porro, libero aperiam ipsam nulla hic, unde, ea amet ipsa eum labore eius impedit officia eveniet ducimus corrupti ut veritatis {name}! Laboriosam, iste cumque tempore dolorem odit at porro corrupti obcaecati maxime accusamus quas, voluptas sequi magni quisquam id excepturi nam, incidunt doloribus sed eaque autem. Assumenda possimus culpa obcaecati animi ducimus aperiam doloremque. Id, veritatis excepturi eos illo vel, voluptas cupiditate omnis eligendi dolorum repellat totam odit perspiciatis delectus optio eum maiores. Officiis quo tempora ad a {name} vel reiciendis ducimus quae iste fuga. Quos consequatur mollitia minus, non laudantium odio cumque voluptatibus aut quo natus unde neque deleniti maxime sapiente sint cum? Nemo facilis exercitationem eligendi assumenda cum est ex in a quod odit qui, voluptatibus voluptatum, porro repudiandae reiciendis asperiores quibusdam iusto odio enim? Eius, neque!</p>
        </>
    )

}

export default Newuse;