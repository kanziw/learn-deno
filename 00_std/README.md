# std lib
> [doc](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts)
> [std lib](https://deno.land/std/)

```zsh
❯ deno https://deno.land/std/examples/welcome.ts
Download https://deno.land/std/examples/welcome.ts
Compile https://deno.land/std/examples/welcome.ts
Welcome to Deno 🦕
```

## serve.ts

```zsh
❯ denon --allow-net=127.0.0.1 -w server.ts server.ts
[DENON] Watching /Users/kanziw/dev/learn-deno/00_std
http://localhost:8000/

❯ curl localhost:8000
{"method":"GET","url":"/","proto":"HTTP/1.1","headers":{}}
```

## test.ts

```zsh
❯ denon test -w test.ts
```
