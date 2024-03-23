// main.go

package main

import (
	"fmt"
	"time"
	"os"
	"bufio"
)

func main() {
	genesisBlock := NewGenesisBlock()

	genesisBlock.printBlock()

	secondBlock := NewBlock(1, time.Now().Unix(), "Block 2 Data", genesisBlock.Hash)

	secondBlock.printBlock()

	thirdBlock := NewBlock(2, time.Now().Unix(), "Block 3 Data", secondBlock.Hash)

	thirdBlock.printBlock()

	// Create a new block with user input data
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter data for the new block: ")
	userData, _ := reader.ReadString('\n')

	newBlock := NewBlock(3, time.Now().Unix(), userData, thirdBlock.Hash)
	newBlock.printBlock()
}

func NewGenesisBlock() *Block {
	return NewBlock(0, time.Now().Unix(), "Genesis Block Data", "")
}

func (b *Block) printBlock() {
	fmt.Printf("Index: %d\n", b.Index)
	fmt.Printf("Timestamp: %d\n", b.Timestamp)
	fmt.Printf("Data: %s\n", b.Data)
	fmt.Printf("Previous Hash: %s\n", b.PreviousHash)
	fmt.Printf("Hash: %s\n\n", b.Hash)
}