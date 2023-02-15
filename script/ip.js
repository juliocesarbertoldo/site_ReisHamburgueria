function carregar() {
  let ip_sistema = window.document.getElementById('ip-sistema')
        fetch('https://api.ipify.org?format=json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					if (data.ip == '187.109.170.81') {
                        ip_sistema.src = 'http://192.168.100.100/mmrest/autocliente/'
                    }
				});
}

document.onload = carregar()