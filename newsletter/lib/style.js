
export const color = {
    purple:'#5D47FF',
    marine:'#182449',
    black:'#070812',
    dark_grey:'#444D66',
    blue_white:'#F5F7F9',
    white:'#ffffff',
    panel_bkg:'#FCFDFF',
    purple_light:"#C5BEF8"
  };

export const size = {
    small:"16px",
    p:"20px",
    subtext:"26px",
    big:"42px",
};


export default {

    color:color,
    size:size,
    container:{
        backgroundColor: color.blue_white,
        marginTop: '20px',
        width: '600px',
        margin: '0 auto',
        padding: '0px 0px 0px',
    },
    main:{
        backgroundColor: color.white,
        color:color.marine,
        width:'100%',
        fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    },
    link:{
        paddingTop:'10px',
        color:color.dark_grey,
        fontWeight:'lighter',
        margin:'auto',
        fontSize:size.small,
        textDecoration:'underline'
    },
    topBanner:{
        width:'600px',
        padding:'20px 30px'
    },
    introText:{
        textAlign:'center', 
        fontSize:size.p, 
        lineHeight:'1.5', 
        margin:0,
        padding: '0 30px'
    },
    heading:{
        color: color.purple,
        fontSize: size.big,
        marginBottom: '0px'
    },
    subtitle:{
        fontSize:size.subtext,
        fontWeight:'bold',
        marginTop:'6px'
    },
    section:{
        padding: '20px 30px'
    },
    resume:{
        heading:{ margin: 0, fontSize:size.p, textAlign:'center', backgroundColor:color.panel_bkg, color:color.marine },
        link:{ fontSize: size.small, color: color.purple, fontWeight:'bold', textDecoration:'none' }
    },
    button:{
        backgroundColor:color.purple,
        color:color.blue_white,
        fontSize:size.subtext,
        fontWeight:"bold",
        letterSpacing:'1px',
        padding: '10px 30px',
        borderRadius:"3px"
    }
};


  

