
//****************************   switch    ***************************





const MetodoPago = 'Paypal';


switch (MetodoPago) {

    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;


    case 'PayPal':
        console.log('pagaste con PayPal');
        break;

    case 'Transferencia':
        console.log('pagaste con Transferencia');
        break;




    default:
        console.log('Aun no has pagado');
        break;
}

