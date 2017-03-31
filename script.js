

var color='blue';
var row =[];
var Button = React.createClass({

  clear: function(){

    document.getElementById('container').innerHTML='';
    ReactDOM.render(<div>

      <Block/><Block/><Block/><Block/><Block/><Block/><Block/> <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/> <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
        <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
                <Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
       <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
               <Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
      <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
         <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
         <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
         <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
         <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
              <Block/><Block/><Block/><Block/><Block/>
    </div>, document.getElementById('container'));


  },
   changeColor: function(){

     if(color==='blue')
     {
       color='yellow'
        document.getElementById('showColor').style.background='yellow'
      }

     else if(color==='yellow')
      {
        color='green'
          document.getElementById('showColor').style.background='green'
        }
     else if(color==='green')
      {
        color='red'
       document.getElementById('showColor').style.background='red'
    }
     else if(color==='red')
      {
        color='black'
         document.getElementById('showColor').style.background='black'
       }
       else if(color==='black')
        {
          color='blue'
           document.getElementById('showColor').style.background='blue'
         }

   },

  render: function(){

      return(
            <div>
             <input type="button" className="btn" value="Clear" onClick={this.clear}></input>
             <br/>
             <input type="button" className="btn-2" value="Color" onClick={this.changeColor}></input>
            </div>
      )

  }


});



var Block = React.createClass({

      getInitialState: function(){

              return {hover_flag: false, click_flag: false}

        },

        hoverEvent: function(){

          this.setState({hover_flag: !this.state.hover_flag})
        },

        clickEvent: function(){

           this.setState({click_flag: !this.state.click_flag})

        },
        cheakColor: function(){



        },
        render: function(){
               var bStyle={}

               if(this.state.hover_flag)
               {

                      bStyle ={backgroundColor:color}

               }
               if(this.state.click_flag)
               {
                 bStyle ={backgroundColor:color}
               }
          

               return (

                 <div className="block" style={bStyle} onClick={this.clickEvent} onMouseEnter={this.hoverEvent} onMouseLeave={this.hoverEvent}></div>

               )







     }


});

ReactDOM.render(<div id="showColor"><Button/></div>,document.getElementById('buttons'));


 ReactDOM.render(<div>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/> <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/> <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
     <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
             <Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
    <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
            <Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
   <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
           <Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>
  <Block/><Block/><Block/><Block/><Block/><Block/><Block/>




 </div>, document.getElementById('container'));
