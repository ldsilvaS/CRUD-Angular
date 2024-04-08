## CRUD - Teste

## Modificações para Implementar:

```javascript
deleteCliente(cliente: any) {
    this.clienteSelecionado = cliente;
    this.apiService.deleteCliente(this.clienteSelecionado.id).subscribe(() => {
      this.getAll();
    });
    console.log(cliente);
  }

```
