const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const sip = document.querySelector('#sip')
const sipContent = document.querySelector('#sip-content')
const communiwise = document.querySelector('#communiwise')
const communiwiseContent = document.querySelector('#communiwise-content')
const spaceship = document.querySelector('#spaceship')
const spaceshipContent = document.querySelector('#spaceship-content')
const filetransfer = document.querySelector('#filetransfer')
const filetransferContent = document.querySelector('#filetransfer-content')
const securecomm = document.querySelector('#securecomm')
const securecommContent = document.querySelector('#securecomm-content')
const apps = document.querySelector('#apps')
const appsContent = document.querySelector('#apps-content')


about.addEventListener('click', ()=>{
    new WinBox({
        title: 'About me',    
        modal: true,
        width: '700px',
        height:'400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
});

contact.addEventListener('click', ()=>{
    new WinBox({
        title: 'Contact me',
        background: '#00aa00',
        width: '400px',
        height:'400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    }) 
});

sip.addEventListener('click', ()=>{
    new WinBox({
        title: 'sip:push-to-talk',
        background: '#00aa00',
        width: '400px',
        height:'400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: sipContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
     
    })
});

communiwise.addEventListener('click', ()=>{
    new WinBox({
        title: 'CommUniWise',
        background: '#00aa00',
        width: '400px',
        height:'400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: communiwiseContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },     
    })
});

spaceship.addEventListener('click', ()=>{
    new WinBox({
        title: 'Don`t Shoot My Spaceship Redux',
        background: '#00aa00',
        width: '400px',
        height:'400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: spaceshipContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },     
    })
});

filetransfer.addEventListener('click', ()=>{
    new WinBox({
        title: 'PKI Wise File Transfer',
        background: '#00aa00',
        width: '400px',
        height:'400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: filetransferContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },     
    })
});

securecomm.addEventListener('click', ()=>{
    new WinBox({
        title: 'SecureComm: Chat and File Transfer App',
        background: '#00aa00',
        width: '400px',
        height:'400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: securecommContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },     
    })
});

apps.addEventListener('click', ()=>{
    new WinBox({
        title: 'Multiple web sites and apps',
        background: '#00aa00',
        width: '400px',
        height:'400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: appsContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },     
    })
});