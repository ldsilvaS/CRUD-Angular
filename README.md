## CRUD - Teste

## Modificações para Implementar:

```typescript

deleteCliente(cliente: any) {
    this.clienteSelecionado = cliente;
    this.apiService.deleteCliente(this.clienteSelecionado.id).subscribe(() => {
      this.getAll();
    });
    console.log(cliente);
  }

```
