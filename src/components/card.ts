export class Card {
    constructor(
        public logo: string,
        public cantidad_miembros: string,
        public nombre_grupo: string,
        public descripcion_grupo: string,
        public btn_ver_mas: string,
        public btn_unirse_grupo: string
    ) { }

    renderHTML() {
        document.body.innerHTML = `
        <section class="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div class="bg-white rounded-2xl p-6 w-80 shadow-lg relative">
                <img class="w-12 h-12 rounded-full" src="${this.logo}" alt="logo">
                <span class="absolute top-4 right-4 text-xs text-gray-600 bg-gray-200 rounded-full px-2 py-1">${this.cantidad_miembros}</span>
                <h1 class="text-lg font-bold mt-3">${this.nombre_grupo}</h1>
                <p class="text-sm text-gray-500 mt-2">${this.descripcion_grupo}</p>
                <div class="flex justify-end mt-4 space-x-2">
                    <button class="text-gray-700 font-medium rounded-xl px-5 py-1.5 border border-gray-300 hover:bg-gray-200 transition duration-200">
                        ${this.btn_ver_mas}
                    </button>
                    <button id="joinBtn" class="bg-blue-600 text-white font-medium rounded-xl px-5 py-1.5 hover:bg-blue-700 transition duration-200">
                        ${this.btn_unirse_grupo}
                    </button>
                </div>
            </div>

            <p id="mensaje" class="hidden mt-4 bg-green-100 text-green-800 px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition duration-300">
                Welcome!
            </p>
        </section>
        `;

       
    }
}
