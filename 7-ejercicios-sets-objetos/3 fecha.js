const fechaActual = new Date();

const fechaCumple = new Date(1995, 11, 4);

const verificar = fechaActual.getTime() > fechaCumple.getTime();

const obtenerDia = fechaCumple.getDate();

const obtenerMes = fechaCumple.getMonth() + 1;

const formatoCumple = fechaCumple.toLocaleDateString();