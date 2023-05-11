if ('serviceWorker' in navigator) {
   window.addEventListener('load', function() {
     navigator.serviceWorker.register('/sw.js').then(function(registration) {
       // El Service Worker fue registrado exitosamente
       console.log('Service Worker registrado con alcance:', registration.scope);
     }, function(err) {
       // Ocurrió un error al registrar el Service Worker
       console.log('Error al registrar el Service Worker:', err);
     });
   });
 }

 
 
 
 

