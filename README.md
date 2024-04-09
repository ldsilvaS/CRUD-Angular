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

```typescript

deleteCliente(id: any){
  return this.http.delete<any[]>(`https://www.webuprs.com.br/php/deleteCliente.php?id=${id}`)
}

```
