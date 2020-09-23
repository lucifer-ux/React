import React from 'react';
import Content from './Content';
import RightContent from './RightContent';
import Footer from './Footer';
class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:"data:image/jpeg;base64,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",
            allMemeImages:[],
            color:"white"
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleColor=this.handleColor.bind(this);
    }
     componentDidMount(){
         fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response=>{
                const {memes}=response.data
                console.log([memes[0]])
                this.setState({
                    allMemeImages:memes
                })
            })
        }

        handleChange(event){
            const {name, value}= event.target
            this.setState({
                [name]:value,})
         }
        handleColor(){
            if(this.state.color==="white"){this.setState({color:"black"})}
            else{
            this.setState({color:"white"})
        }
        }

        handleSubmit(event){
            event.preventDefault();
            const randomNumber=Math.floor(Math.random()*this.state.allMemeImages.length)
            const randMemeImg=this.state.allMemeImages[randomNumber].url
            this.setState({
                randomImage:randMemeImg
            })
        }

    render(){
        
        return(<div className="container1">
            <Content/>
            <RightContent/>
            <form className="meme-form" onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                className="first"
                name="topText"
                 placeholder="topText"
                  value={this.state.topText}
                  onChange={this.handleChange}/>

                <br/>

                <input type="text"
                 className="seccond"   
                 name="bottomText"
                 placeholder="bottomText" 
                 value={this.state.bottomText}
                 onChange={this.handleChange}/>

                <br/>
                <button className="final">GEN..</button>

                <input type="radio"  name="color" onChange={this.handleColor}/>
                <label>BLACK</label>

                <input type="radio" name="color" onChange={this.handleColor}/>
                <label>WHITE</label>

                </form>      

                <div className="meme">

                <h2 
                className="top" 
                style={{color:this.state.color}} >{this.state.topText}</h2>
                <img src={this.state.randomImage} alt="meme" />

                <h2 
                className="bottom" 
                style={{color:this.state.color}}>{this.state.bottomText}</h2>    
                </div>  
                <Footer/>
         </div>)
    }
}


export default MemeGenerator;