// block.go

package main

import (
	"encoding/hex"
	"fmt"
	"crypto/sha256"
)

type Block struct {
	Index         int
	Timestamp     int64
	Data          string
	PreviousHash string
	Hash          string
}

func NewBlock(index int, timestamp int64, data string, previousHash string) *Block {
	block := &Block{
		Index:         index,
		Timestamp:     timestamp,
		Data:          data,
		PreviousHash: previousHash,
	}
	hash := block.calculateHash()
	block.Hash = hash

	return block
}

func (b *Block) calculateHash() string {
	record := fmt.Sprintf("%d%d%s%s", b.Index, b.Timestamp, b.Data, b.PreviousHash)

	hasher := sha256.New()
	hasher.Write([]byte(record))
	hash := hasher.Sum(nil)

	return hex.EncodeToString(hash)
}
