
export const color = {
    purple:'#5D47FF',
    marine:'#182449',
    black:'#070812',
    dark_grey:'#444D66',
    blue_white:'#F5F7F9',
    white:'#ffffff',
    panel_bkg:'#FCFDFF'
  };

export const size = {
    small:"14px",
    p:"16px",
    subtext:"20px",
    big:"35px",
};


export default {

    color:color,
    size:size,
    container:{
        backgroundColor: color.blue_white,
        marginTop: '20px',
        width: '600px',
        margin: '0 auto',
        padding: '30px 0px 130px',
    },
    main:{
        backgroundColor: color.blue_white,
        color:color.marine,
        fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    },
    link:{
        color:color.dark_grey,
        fontWeight:'lighter',
        margin:'auto',
        fontSize:'12px',
        textDecoration:'underline'
    },
    topBanner:{
        padding:'10px 30px'
    },
    introText:{
        textAlign:'center', 
        fontSize:size.p, 
        lineHeight:'1.5', 
        margin:0
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
        link:{ fontSize: size.p, color: color.purple, fontWeight:'bold', textDecoration:'none' }
    },
    button:{
        backgroundColor:color.purple,
        color:color.blue_white,
        fontSize:size.subtext,
        letterSpacing:'1px',
        padding: '10px 20px',
        borderRadius:"3px"
    }
};


  

