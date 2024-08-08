package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type User struct {
	Name      string
	Avatar    string
	ImageSize int
}

func main() {
	http.HandleFunc("/bob", func(w http.ResponseWriter, r *http.Request) {
		u, err := json.Marshal(User{Name: "Bob", Avatar: "foo.com/bob", ImageSize: 90})
		if err != nil {
			panic(err)
		}
		fmt.Fprintf(w, string(u))
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
