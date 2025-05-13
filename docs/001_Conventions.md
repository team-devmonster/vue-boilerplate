### 용어

#### Base

- Restful
- /<resource>/ - list
- /<resource>/<resource_id> - detail
- /<resource>/add - add form
- /<resource>/edit - edit form
- /<resource>/<resource_id>/<sub_resource>/

- 게시글
- /article/1/comment/1/tag/
- /company/1 /department/1 /team/1/

  - CompanyController
  - CompanyDepartmentController
  - CompanyDepartmentTeamController

#### Create

- form: add
- process: create (POST)

#### Read (GET)

- list: / (listBy) listing
- detail: :id (findBy) detail

#### Update

- Form: edit
- process: update (PUT)

#### Delete

- destroy (DELETE)
