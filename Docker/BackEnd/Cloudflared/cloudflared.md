
# **Cloudflared Tunnel instructions**

Find the cloudflared Image and copy/highlight the `Image ID`.

```
docker image ls 
```

Run the following command first:
```
chmod -R 777 /mnt/appdata/brainstormr/cloudflared
```
Make sure to replace the placeholder with your Cloudflared Image. 
```
docker run -it --rm -v /mnt/appdata/brainstormr/cloudflared/data:/home/nonroot/.cloudflared/ CLOUDFLAREDIMAGEID tunnel login
```


The following is to make the tunnel.
```
docker run -it --rm -v /mnt/appdata/brainstormr/cloudflared/data:/home/nonroot/.cloudflared/ CLOUDFLAREDIMAGEID tunnel create TUNNELNAME
```

Latest Cloudflared Image ID:
```
10/26/2022="cloudflare/cloudflared:2022.10.3"
```


Examples:

Authentication-
```
docker run -it --rm -v /mnt/appdata/brainstormr/cloudflared/data:/home/nonroot/.cloudflared/ cloudflare/cloudflared:2022.10.3 tunnel login
```

Tunnel-
```
docker run -it --rm -v /mnt/appdata/brainstormr/cloudflared/data:/home/nonroot/.cloudflared/ cloudflare/cloudflared:2022.10.3 tunnel create brainstormr-vps
```