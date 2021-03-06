/* 
  - Bài 1:
    a) Viết hàm truyền vào 1 mảng person và giới tính trả về số lượng thành viên theo giới tính.
    b) Viết hàm truyền vào 1 mảng person, trả về danh sách thống kê dạng: 
    {
      treCon: 5,
      thanhNien: 2,
      nguoiGia: 3
    }
    Điều kiện : - dưới 18 trẻ con
                - từ 18 - 30 thanh niên
                - sau 30 người già
    Với data cho sẵn. Sau mỗi phần đều in ra màn hình kết quả.
*/

const listPersons = [
  { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
  { name: "Lê Văn Nam", age: 60, gender: "nam" },
  { name: "Trần Chiến Công", age: 8, gender: "nam" },
  { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
  { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
  { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
  { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
  { name: "Hà Văn Phòng", age: 30, gender: "nam" },
  { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
  { name: "Lê Văn Hà", age: 55, gender: "nam" },
]

//Example:
function countPersonByGender(listPerson, gender) {
  let count;
  // do something

  return count;
}

function statisticsByAge(listPerson) {
  // do something
}

function main() {
  console.log(countPersonByGender(listPersons, 'nam'));
  // do something
}

main();

/*
  - Bài 2:
    a) Viết hàm truyền vào 1 danh sách tài khoản, kiểm tra xem tài khoản nào đã nạp trên 1 triệu.
        và set lại loại tài khoản đó thành VIP.
    b) Viết hàm truyền vào 1 danh sách tài khoản, id tài khoản, số tiền để nạp tiền cho 1 tài khoản theo id đó.
        Kiểm tra nếu balance = 0 thì khuyến mại nạp lần đầu cho tài khoản đó 200%.
        Còn lại với các tài khoản khác sẽ không có khuyến mại.
    c) Viết hàm kiểm tra tài khoản nào có thuộc tính isActive thì set thành true sau đó in ra màn hình.
    ---Sau mỗi phần đều in ra màn hình kết quả.---
*/

const listAccounts = [
  { id: 1, username: 'aduvip', balance: 1000000, type: 'normal' },
  { id: 2, username: 'aduvip1', balance: 500000, type: 'normal' },
  { id: 3, username: 'aduvip2', balance: 0, type: 'normal' },
  { id: 4, username: 'aduvip3', balance: 20000, type: 'normal', isActive: false },
  { id: 5, username: 'aduvip4', balance: 2500000, type: 'normal' },
  { id: 6, username: 'aduvip5', balance: 0, type: 'normal', isActive: false },
  { id: 7, username: 'aduvip6', balance: 1300000, type: 'normal' },
  { id: 8, username: 'aduvip7', balance: 2200000, type: 'normal' },
  { id: 9, username: 'aduvip8', balance: 1450000, type: 'normal', isActive: false },
  { id: 10, username: 'aduvip9', balance: 0, type: 'normal' },
  { id: 11, username: 'aduvip10', balance: 780000, type: 'normal', isActive: false },
  { id: 12, username: 'aduvip11', balance: 560000, type: 'normal' },
  { id: 13, username: 'aduvip12', balance: 0, type: 'normal', isActive: false },
  { id: 14, username: 'aduvip13', balance: 430000, type: 'normal' },
  { id: 15, username: 'aduvip14', balance: 990000, type: 'normal', isActive: false },
  { id: 16, username: 'aduvip15', balance: 10000, type: 'normal' },
]
