import Button from './Button';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondry' ,'text'],
      control: { type: 'radio' },
    },
    size :{
      options :['large' , 'medium' , 'small'] , 
      control :{type:'radio'}
    } ,
    color :{
      options :['green' , 'red' , 'blue'] , 
      control :{type:'radio'}
    }
  }
};

export const Default = {
  args :{
    variant :"primary" , 
    size : 'medium' ,
    color:'green',
    children :"Button"
  }
}

export const Primary = {
  args :{
    ...Default.args , variant :'primary' 
  }
}

export const Secondry = {
  args :{
    ...Default.args , variant :'secondry' 
  }
}
export const Text = {
  args :{
    ...Default.args , variant :'text' 
  }
}

export const Large = {
  args :{
    ...Default.args , size:'large'
  }
}

export const Medium = {
  args :{
    ...Default.args , size:'medium' 
  }
}

export const Small = {
  args :{
    ...Default.args , size:'small' 
  }
}