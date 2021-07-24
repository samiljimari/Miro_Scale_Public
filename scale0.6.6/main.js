miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Scale',
        svgIcon: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <path d="M21,6.2c-0.6,0-1,0.4-1,1V11h-7V9.3c0-0.6-0.4-1-1-1s-1,0.4-1,1V11H4V7.2c0-0.6-0.4-1-1-1s-1,0.4-1,1v9.6c0,0.6,0.4,1,1,1 s1-0.4,1-1V13h7v1.7c0,0.6,0.4,1,1,1s1-0.4,1-1V13h7v3.8c0,0.6,0.4,1,1,1s1-0.4,1-1V7.2C22,6.6,21.6,6.2,21,6.2z"/> </svg>',
        onClick: function () {
          miro.board.ui.openLeftSidebar('sidebar.html', { width: 400} )
        }
      }
    }
  })
})
