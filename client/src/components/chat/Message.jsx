import { Box,Typography,makeStyles} from "@material-ui/core";
import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

const useStyles=makeStyles({
  wrapper:{
    background: '#FFFFFF',
    padding: 5,
    maxWidth: '60%',
    width: 'fit-content',
    display: 'flex',
    borderRadius: 10,
    wordBreak: 'break-word'
  } ,
   text :{
     fontSize : 14  ,
     padding :'0px 25px 0px 5px'
   }  ,
    time :{

     fontSize:10,
      marginTop:'auto'   ,
      marginTop :6 ,
      color:'#919191'   ,
      wordBreak:'keep-all' 

    }  ,

    own :{
        background: '#dcf8c6',
        padding: 5,
        maxWidth: '60%',
        width: 'fit-content',
        marginLeft: 'auto',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word'
    }


})


const Message=({message})=>{
   const classes=useStyles()    ;

   const {account}=useContext(AccountContext)  ;

   const formatDate=(date)=>{
      return date<10 ? '0'+date : date   ;

   }


return(
      <Box className={account.email===message.sender?classes.own:classes.wrapper}>

       <Typography className={classes.text}>{message.text}</Typography>
       <Typography className={classes.time}>{formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</Typography>
      </Box>
    
)



}

export default Message ;