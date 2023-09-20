! USER ROLES

- SUPER_ADMIN - can make any changes and create ADMIN/SCHOOL/ORGANIZATIONS users
- ADMIN - can see everything and create SCHOOL/ORGANIZATIONS users
- SCHOOL - can manage students
- ORGANIZATIONS - can create events
- STUDENT

! EVENT STATUS

- PUBLISHED - published event not full
- FULL - event full
- FINISHED - event finished

! USER TO EVENT STATUS

- REQUESTED - requested to join
- JOINED - accepteed
- REJECTED - rejected
- MARKED - marked attendence
- FINISHED - finished
- MISSING - didn t participated in the event

!!! SEC RISK
--- role needs to be separate
--- pass needs to be hashed on client side

!!!!! Check overflow on event capacity
!!!! MORE VALIDATORS ON JOINING EVENT
!! add some dtos
!! look on dtos for student get events, smth easy

!!! modifications on database

- add name field for user ?
- notifications
- last meet date - for user meet with admin
- worked hours? for user??
- delete description for organization

CREATE PUBLIC/UPLOADS AND PUBLIC/TABLES
