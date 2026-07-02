interface authform{
    name:string,
    submitbutton:string,
    onReset:(e:any)=>void,
    onSubmit:(e:any)=>void
}  

const Loginform : authform ={
    name:'loginForm',
    submitbutton:'login',
    onReset:(e)=>{//some implement
    },
    onSubmit:(e)=>{
        //some implement
    }

}
console.log(Loginform)
