# Welcome to the World of Approachable Low-Level C# Programming!

Diving into the depths of low-level programming in C# might seem daunting at first glance. The mention of pointers, memory management, and unsafe code often sends even experienced developers running for the hills. But what if we told you that unlocking the power of low-level C# is not only achievable but can also be an exciting and rewarding journey? Welcome to a blog dedicated to transforming the seemingly formidable world of low-level C# into a playground of opportunities for optimization, efficiency, and performance.

## Making Low-Level C# Accessible

Our mission is simple: to demystify the complexities of low-level C# programming and show you that with the right guidance, these powerful concepts are within your grasp. Whether you're looking to optimize critical sections of your code, understand how your applications interact with hardware, or simply curious about what goes on under the hood of the C# language, you're in the right place.

# Development stuff

## API

<details>
    <summary>Diagram</summary>

```mermaid
sequenceDiagram
    box Actor
    participant User
    end
    box Core
    participant Core
    end
    box Buisness
    participant Buisness
    end
    box Infra
    participant Infra
    end
    box Database
    participant Database
    end
    User-)Core: Gimme post
    Core-)Buisness: Function(request)
    Buisness-)Infra: Function(request)
    Infra-)Database: Function(requestDB)
    Database-)Infra: Task(responseDB)
    Infra-)Buisness: Task(response)
    Buisness-)Core: Task(response)
    Core-)User: Here be dragons
```

</details>

## Database Entities

<details>
    <summary>Diagram</summary>

```mermaid
classDiagram
    class Account{
        +Int Id
        +Int RoleCategorizedItemId
        +String Name
    }
    class CategorizedItem{
        +Int Id
        +String Name
        idkIfThatsGonnaBeAnEntityYet()
    }
    class Post{
        +Int Id
        +Int PostCategorizedItemId
        +String Title
        +String Description
        +String Text
        +String Code
        +String Tags
        +Date UpdateDate
        +Account UpdateBy
        +Bool IsActive
    }

    Account o-- Post
```

</details>
