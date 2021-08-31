package collection

import (
	"example.com/question"
	"github.com/google/uuid"
)

type Collection struct {
	CollectionID           uuid.UUID           `json:"collectionID"`
	CollectionName         string              `json:"collectionName"`
	CollectionDescripition string              `json:"collectionDescription"`
	Auther                 question.User       `json:"auther"`
	Questions              []question.Question `json:"questions"`
	CreateTime             string              `json:"createtime"`
	UpdateTime             string              `json:"updatetime"`
}
