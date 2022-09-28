import React from "react";
import Card from "./components/Product-card";
import Products from "./products.json";
import Card2 from "./components/Card2";
import ReactBootstrap from "./components/reactBootstrap";
import State from "./state"
import HooksuseState from "./components/conditional-rendering/Main"
import CounterApp from "./components/assingment-2-counter-app/counter-App";
import FormHandling from "./components/form-handling/Form";
import FormHandling2 from "./components/form-handling/form-handling2";
import ChildComponent from "./components/Data-ParentToChild/ChildComponent";

function App() {
  // let items = [];
  // items = Products.map((item, index) => (
  //   <Card
  //     key={index}
  //     productTitle={item.productTitle}
  //     productDesc={item.productDesc}
  //     productAmount={item.productAmount}
  //     imgSrc={item.productImg}
  //   />
  // ));
  /* //! passing data from child to parent component */

  const passingDataPtoC = (childDataParameter) => {
    console.log(childDataParameter)
  }

  return (
    <div>
      {/* <h1 className="headingStyle">Products</h1>
      {items}
      <Card2 name='card2'/>
      < ReactBootstrap />
      <State  /> */}
      {/* <State /> */}
      {/* <HooksuseState /> */}
      {/* <Host /> */}
      {/* <CounterApp /> */}
      {/* <FormHandling /> */}
      {/* <FormHandling2 /> */}


      {/* //! passing data from child to parent component */}

      <ChildComponent parentData="I am parent data visit to child compunent.. please welcome me" childData={passingDataPtoC} 
      
      />
       
    </div>
  );
}

export default App;






