

var color='blue';
var times =0;
var mousedown=0;
var arr =[];
var Button = React.createClass({

  clear: function(){

    document.getElementById('container').innerHTML='';
    ReactDOM.render(<div>
          {arr}
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
        color='grey'
         document.getElementById('showColor').style.background='grey'
       }
       else if(color==='grey')
        {
          color='magenta'
           document.getElementById('showColor').style.background='magenta'
         }
         else if(color==='magenta')
          {
            color='orange'
             document.getElementById('showColor').style.background='orange'
           }
         else if(color==='orange')
          {
            color='white'
             document.getElementById('showColor').style.background='white'
           }
           else if(color==='white')
            {
              color='blue'
               document.getElementById('showColor').style.background='blue'
             }
           else if(color==='black')
            {
              color='blue'
               document.getElementById('showColor').style.background='blue'
             }


   },
   clearIt: function(){

     color='black'
     document.getElementById('showColor').style.background='black'


   },
   circle: function(){


     for(var i=0;i<document.querySelectorAll('.block').length;i++)
     {
       document.querySelectorAll('.block')[i].style.borderRadius = '40px'
     }
   },
   square: function(){


     for(var y=0;y<document.querySelectorAll('.block').length;y++)
     {
       document.querySelectorAll('.block')[y].style.borderRadius = '0px'
     }

   },

  render: function(){

      return(
            <div>
             <input type="button" className="btn" value="Clear" onClick={this.clear}></input>
             <br/>
             <input type="button" className="btn" value="BlackX" onClick={this.clearIt}></input>
             <br/>
             <input type="button" className="btn" value="Circle" onClick={this.circle}></input>
             <br/>
             <input type="button" className="btn" value="Square" onClick={this.square}></input>
             <br/>
             <input type="button" className="btn-2" value="Color" onClick={this.changeColor}></input>

            </div>
      )

  }


});



var Block = React.createClass({

      getInitialState: function(){

              return {hover_flag: false, click_flag: false, mouse_flag: false}

        },

        hoverEvent: function(){
          if(mousedown===1)
          {
           if(this.state.hover_flag===false)
          this.setState({hover_flag: !this.state.hover_flag})
           if(this.state.hover_flag)
           this.setState({click_flag: !this.state.click_flag})
         }
        },

       clickEvent: function(){

           this.setState({click_flag: !this.state.click_flag})

        },
        cheakColor: function(){



        },
        down: function(){
          mousedown=1
        },
        up: function(){
          mousedown=0
        },
        render: function(){
               var bStyle={}

               if(this.state.hover_flag)
               {

                      bStyle ={backgroundColor:color}

               }
               if(!this.state.hover_flag)
               {

                 bStyle ={backgroundColor:'black'}
               }
               if(this.state.click_flag)
               {
                 bStyle ={backgroundColor: color}
               }

               return (

                <div className="block" style={bStyle} onMouseDown={this.down} onClick={this.clickEvent} onMouseUp={this.up} onMouseEnter={this.hoverEvent} /*onMouseLeave={this.hoverEvent}*/></div>


               )







     }


});

ReactDOM.render(<div id="showColor"><Button/></div>,document.getElementById('buttons'));


var xx = window.innerWidth;
var yy = window.innerHeight;
var pole = xx*yy-66000;


for(var i=0;i<pole/2000;i++)
  {
   arr.push(<Block key={i}/>);
 }

 ReactDOM.render(<div>
           {arr}
</div>, document.getElementById('container'));
