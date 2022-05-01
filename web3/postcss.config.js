const tailwindcss=require('tailwindcss');

module.exports={
    Plugins:[
        tailwindcss('./tailwind.config'), require('autoprefixer') ],
}