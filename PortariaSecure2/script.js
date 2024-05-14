document.addEventListener('DOMContentLoaded', function() {
    const entryExitList = document.getElementById('entry-exit-list');
    const searchInput = document.getElementById('search');
    const registros = [
        { nome: 'Mirella', cargo: 'Aluno', id: '001', data: '14/05/2024', horario: '07:30', tipo: 'Entrada', foto: 'iconeperfil.png' },
        { nome: 'Ramon', cargo: 'Professor', id: '002', data: '14/05/2024', horario: '08:35', tipo: 'Entrada', foto: 'iconeperfil.png' },
        { nome: 'Lucas', cargo: 'Professor', id: '003', data: '14/05/2024', horario: '09:00', tipo: 'Entrada', foto: 'iconeperfil.png' },
        { nome: 'André', cargo: 'Demitido', id: '004', data: '14/05/2024', horario: '09:57', tipo: 'Entrada', foto: 'iconeperfil.png' },
        { nome: 'Andreza', cargo: 'Professor', id: '005', data: '14/05/2024', horario: '10:43', tipo: 'Entrada', foto: 'iconeperfil.png' },
        { nome: 'Sérgio', cargo: 'Coordenador', id: '006', data: '14/05/2024', horario: '11:55', tipo: 'Entrada', foto: 'iconeperfil.png' },
        { nome: 'Ernesto', cargo: 'Coordenador', id: '007', data: '14/05/2024', horario: '14:55', tipo: 'Entrada', foto: 'iconeperfil.png' },
        { nome: 'Daniel', cargo: 'Professor', id: '008', data: '14/05/2024', horario: '15:25', tipo: 'Entrada', foto: 'iconeperfil.png' },
        { nome: 'Landroni', cargo: 'Professor', id: '009', data: '14/05/2024', horario: '16:25', tipo: 'Entrada', foto: 'iconeperfil.png' },
    ];
                    function renderizarRegistros(registros) {
                    entryExitList.innerHTML = '';
                    registros.forEach(registro => {
                    entryExitList.innerHTML += `
                    <div class="entry-exit-item">
                    <img src="${registro.foto}" alt="Foto de Perfil">
                    <div class="entry-exit-item-details">
                    <h3>${registro.nome}</h3>
                    <p>Cargo: ${registro.cargo}</p>
                    <p>ID: ${registro.id}</p>
                    <p>Data: ${registro.data}</p>
                    <p>Horário: ${registro.horario}</p>
                    <p>Tipo: ${registro.tipo}</p>
                    </div>
                    </div>
            `;
        });
    }
    renderizarRegistros(registros);
     searchInput.addEventListener('input', function() {
     const termoBusca = searchInput.value.toLowerCase();
     const registrosFiltrados = registros.filter(registro =>
     Object.values(registro).some(value =>
     typeof value === 'string' && value.toLowerCase().includes(termoBusca)
            )
        );
        renderizarRegistros(registrosFiltrados);
    });
});