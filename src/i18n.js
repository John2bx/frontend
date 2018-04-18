import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      product: {
        'Code':  'Code',
        'Harvested Dated': 'Harvested Dated',
        'Expiration Date': 'Expiration Date',
        'View Seller': 'View Seller',
        'Volume': 'Volume',
        'Price': 'Price',
        'Certification': 'Certification',
        'Country': 'Country',
        'City/Port': 'City/Port',
        'Edit Product': 'Edit Product',
        'Make An Order': 'Make An Order',
        'Product': 'Product',
        'Description': 'Description',
        'Price per kg': 'Price per kg',
        'Please select your currency': 'Please select your currency',
        'Harvested Date': 'Harvested Date',
        'Expiry Date': 'Expiry Date',
        'Please Upload a Photo': 'Please Upload a Photo',
        'Choose file': 'Choose file',
        'No file chosen': 'No file chosen',
        'Save': 'Save',
        'Back': 'Back',
       'Vegetables': 'Vegetables',
       'Fruits & Nuts': 'Fruits & Nuts',
       'Beans & Crop': 'Beans & Crop', 
       'Filter': 'Filter',
       'All': 'All',
       'Select product': 'Select product',
       'HS Code': 'HS Code',
       'From country' : ' From country',
      },
      profile: {
        'Name': 'Name',
      },
      user: {
        'Email': 'Email',
        'Log in': 'Log in',
        'Sign up': 'Sign up',
        'Sign up form': 'Sign up form',
        'Password': 'Password',
        'notmember': 'Not a member yet? Go to ',
        'confirmPassword': 'Confirm password',
        'confirmError': 'The passwords do not match!',
        'minPassLength': 'At least 8 characters',
        'fieldsNecessary': 'Fields marked with * are necessary',
        'alreadyRegistered?': 'Already registered? Go to ',
        'name': 'Name',
        'whatName?': 'What is the name of your organization?',
        'field': 'Field',
        'producer': 'Producer',
        'trader': 'Trader',
        'logistics': 'Logistics',
        'insurance': 'Insurance',
        'other': 'Other',
        'whatField?': 'What is your field of business?',
        'cooperative': 'Cooperative',
        'association': 'Association',
        'private': 'Private',
        'ngo': 'NGO',
        'type': 'Type',
        'whatType?': 'What is the type of your organization?',
        'address': 'Address',
        'country': 'Country',
        'cityPort': 'Nearest city/port',
        'whatCityPort?': 'If you plan to sell, what is the nearest city or port?',
        'phone': 'Phone number',
        'registration': 'Registration number',
        'coc': 'Chamber of Commerce',
        'cocEdit': 'Chamber of Commerce registration number',
        'cocOptional': 'Chamber of Commerce registration number (optional now)',
        'cocExplanation': 'To participate on this website, you will need to provide proof of your membership of your local chamber of commerce. If you have your registration number ready, please fill it in above. You can also do this after signing up. If you have any questions, please contact the webmaster.',
        'resetPassword': 'Reset password',
        'forgotPassword': 'Forgot password',
        'forgotPassword?': 'Forgot password?',
      },
      orders: {
        'Order': 'Order',
        'Order Number': 'Order Number',
        'Order Volume': 'Order Volume',
        'Comments': 'Comments',
        'Status': 'Status',
        'Ordered date': 'Ordered date',
        'Pending': 'Pending',
        'Approved': 'Approved',
        'Declined': 'Declined',
        'Bought': 'Bought',
        'All': 'All',
        'GO TO SELLER PROFILE': 'GO TO SELLER PROFILE',
        'SEE DETAILS': 'SEE DETAILS',
        'GO BACK': 'GO BACK'
      },
      detail: {
        'Order': 'Order',
        'Number': 'Number',
        'Status': 'Status',
        'Organization name': 'Organization name',
        'Field': 'Field',
        'Type': 'Type',
        'COC': 'COC',
        'Address': 'Address',
        'Country': 'Country',
        'Phone': 'Phone',
        'Email': 'Email',
        'ICO': 'ICO',
        'Volume': 'Volume',
        'Comments': 'Comments',
        'ACCEPT': 'ACCEPT',
        'DECLINE': 'DECLINE',
        'GO BACK': 'GO BACK'
      }
    },
    es: {
      product: {
        'Code': 'Código',
        'Harvested Dated': 'Fecha de cosecha',
        'Expiration Date': 'Fecha de vencimiento',
        'View Seller': 'Ver vendedor',
        'Volume': 'Volumen',
        'Price': 'Precio',
        'Certification': 'certificación',
        'Country': 'Estado',
        'City/Port': 'Ciudad',
        'Edit Product': 'Editar producto',
        'Make An Order': 'Hacer un pedido',
        'Product': 'Producto',
        'Description': 'Descripción',
        'Price per kg': 'Precio por kg',
        'Please select your currency': 'Seleccione su moneda',
        'Harvested Date': 'Fecha de cosecha',
        'Expiry Date': 'Fecha de caducidad',
        'Please Upload a Photo': 'Por favor cargue una foto',
        'Choose file': 'Elija el archivo',
        'No file chosen': 'Ningún archivo elegido',
        'Save': 'Salvar',
        'Back': 'Atrás',
        'Vegetables': 'Vegetales',
        'Fruits & Nuts': 'Frutas & Nueces',
        'Beans & Crop' :'Frijoles & Cultivo',
        'Filter': 'Filtrar',
        'All': 'Todas',
        'Select product': 'Seleccionar producto',
        'HS Code': 'Código HS',
        'From country': 'Del pais',
      },
      profile: {
        'new': 'nuevo'
      },
      user: {
        'Email': 'Email',
        'Log in': 'Iniciar sesión',
        'Sign up': 'Registrar',
        'Sign up form': 'Crear una cuenta',
        'Password': 'Contraseña',
        'notmember': '¿No tienes una cuenta?',
        'confirmPassword': 'Confirma la contraseña',
        'confirmError': '¡Las contraseñas no coinciden!',
        'minPassLength': 'Al menos 8 carácteres',
        'fieldsNecessary': 'Espacios marcados con * son necesarios',
        'alreadyRegistered?': '¿Ya tienes una cuenta?',
        'name': 'Nombre',
        'whatName?': '¿Cuál es el nombre de su organización?',
        'field': 'Espacio',
        'producer': 'Productor',
        'trader': 'Vendedor',
        'logistics': 'Logistica',
        'insurance': 'Seguro',
        'other': 'Otros',
        'whatField?': '¿Cuál es su campo de negoción?',
        'cooperative': 'Cooperativa',
        'association': 'Association',
        'private': 'Privada',
        'ngo': 'Organización No Gubernamental ONG',
        'type': 'Tipo',
        'whatType?': '¿Cuál es su tipo de su organización?',
        'address': 'Dirección',
        'country': 'País',
        'cityPort': 'Puerto o ciudad mas cercana',
        'whatCityPort?': '¿Si su plan es vender, cual es la ciudad o puerto mas cercano?',
        'phone': 'Número de telefono',
        'registration': 'Número de registro',
        'coc': 'Camara de Comercio',
        'cocEdit': 'Registro de Camara de Comercio',
        'cocOptional': 'Registro de Camara de Comercio (Opcional ahora)',
        'cocExplanation': 'Para participar en este website, ud. necesita proveer el registro de membresía (pertenencia) de su camara de comercio local. Si ud. tiene su número de registro listo, por favor rellenelo (escríbalo) arriba. También puede hacerlo después de registrarse. Si usted tiene algunas preguntas, por favor contacte al administrador de la web.',
        'resetPassword': 'Restablecer la contraseña',
        'forgotPassword': 'Olvidé la contraseña',
        'forgotPassword?':'¿Olvidaste tu contraseña?'
      },
      orders: {
        'Order': 'Orden',
        'Order Number': 'Número de orden',
        'Order Volume': 'Volumen de pedido',
        'Comments': 'Comentarios',
        'Status': 'Estado',
        'Pending': 'Pendiente',
        'Approved': 'Aprobado',
        'Declined': 'Rechazado',
        'Bought': 'Compró',
        'All': 'Todas',
        'Ordered date': 'Fecha ordenada',
        'SEE DETAILS': 'Ver detalles',
        'GO BACK': 'REGRESA'
      },
      detail: {
        'Order': 'Orden',
        'Number': 'Número',
        'Status': 'Estado',
        'Organization name': 'Nombre de la Organización',
        'Field': 'Campo',
        'Type': 'Tipo',
        'COC': 'COC',
        'Address': 'Dirección',
        'Country': 'País',
        'Phone': 'Teléfono',
        'Email': 'Email',
        'ICO': 'ICO',
        'Volume': 'Volumen',
        'Comments': 'Comentarios',
        'ACCEPT': 'ACEPTAR',
        'DECLINE': 'DISMINUCION',
        'GO BACK': 'REGRESA'
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
