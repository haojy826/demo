(function () {
    $(function () {
        //类似于localhost:1222/Ipersonservice，abp自动拦截过来的，方便进行编辑
        var _personService = abp.services.app.person;

        var _$modal = $("#PersonCreateModal");
        var _$form = _$modal.find('form');

        //添加联系人
        _$form.find('button[type="submit"]').click(function (e) {
            e.preventDefault();//取消submit原本的特性，禁止提交，要跟着我的逻辑走
            if (!_$form.valid()) {//jQuery封装的
                return;
            }
            var personEditDto = _$form.serializeFormToObject();//序列化表单为对象，要和JQuery对应，封装好的函数

            personEditDto.PhoneNumbers = [];//后台拿到的是数组,先进行声明
            var phoneNumber = {};
            phoneNumber.Type = personEditDto.PhoneNumberType;
            phoneNumber.Number = personEditDto.PhoneNumber;

            personEditDto.PhoneNumbers.push(phoneNumber);//添加到数组里使用push


            abp.ui.setBusy(_$modal);//设置页面繁忙，防止乱提交信息，页面会有加载标志
            //abp约定：使用框架时，约定大于配置。createOrUpdatePerson是调用后台的CreateOrUpdatePersonAsync方法
            _personService.createOrUpdatePerson({ personEditDto }).done(function () {
                _$modal.modal('hide');//模态框隐藏
                refreshPersonList();//数据页面刷新，调用的
            }).always(function () {//关闭页面繁忙设置
                abp.ui.clearBusy(_$modal);
            });

        });

        $('.delete-person').click(function () {
            var personId = $(this).attr("data-person-id");
            var personName = $(this).attr('data-person-name');
            deletePerson(personId, personName);
        });

        //删除联系人
        function deletePerson(id, name) {
            abp.message.confirm(
                "是否删除姓名为" + name + "的联系人信息", function (isConfirmed) {
                    if (isConfirmed) {
                        _personService.deletePerson({ id }).done(function () {
                            refreshPersonList();//做完后回调进行刷新
                        });
                    }

                }
            );

        }

        //编辑联系人
        $('.edit-person').click(function (e) {
            e.preventDefault();//去消掉默认功能
            var personId = $(this).attr("data-person-id");
         //下面的代码在执行done时报错，原因是不能从实体映射数据到其他地方，修改完成了
            _personService.getPersonForEdit({ id:personId }).done(function (data) {//回调，使用data接收,首字母都要小写，这是ABP自动生成序列化的规定
                $("input[name=Id]").val(data.person.id);
                $("input[name=Name]").val(data.person.name).parent().addClass('focused');
                $("input[name=EmailAddress]").val(data.person.emailAddress).parent().addClass('focused');
              $("input[name=PhoneNumber]").val(data.person.phoneNumbers[0].number).parent().addClass('focused');
               $("select[name=PhoneNumberType]").selectpicker('val', data.person.phoneNumbers[0].type);
                $("input[name=Address]").val(data.person.address).parent().addClass('focused');

            });
        });

        $('#RefreshButton').click(function () {
            refreshPersonList();
        });
        //刷新联系人列表，实现复用
        function refreshPersonList() {
            location.reload(true);
        }

        //模态框操作
        $('#PersonCreateModal').on('hide.bs.modal',
            function () {
                // 执行一些动作...
                _$form[0].reset();//表单清空
            });
    });
})();