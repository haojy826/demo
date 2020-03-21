using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Data.SqlClient;
using System.Data;
using System.Text;

namespace WebStudy
{
    public partial class index1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]

        public static double[,] LBData()
        {
            DataTable dt = new DataTable();
            string strSql = "SELECT [name] ,[isUse] FROM [dbo].[line]";
            dt = Query(strSql);
            int j;

            int sum_data = dt.Rows.Count;//数据表的行数，也就是总的数据数
            // Console.WriteLine(sum_data);
            int xdata_gap = sum_data / 5;//计算每个间隔的数
            // Console.WriteLine(xdata_gap);
            // int xdata_gap1 = sum_data % 5;//最后的余数
            // Console.WriteLine(xdata_gap1);
            int sum_gap = xdata_gap + 1;//横坐标一共被分成多少段
            // Console.WriteLine(sum_gap);
            double[,] array = new double[2, sum_gap];//创建空的数组，为了存放x坐标轴数据和计算好的利用率
            int[] data_number = new int[sum_gap];//存放id前有多少条被利用的数据
            for (int i = 0; i < sum_gap - 1; i++)
            {
                data_number[i] = Query1((i + 1) * 5);
            }
            data_number[sum_gap - 1] = Query1(sum_data);
            for (int a = 0; a < sum_gap - 1; a++)
            {
                array[0, a] = (a + 1) * 5;
                array[1, a] = data_number[a];
            }
            array[0, sum_gap - 1] = sum_data;
            array[1, sum_gap - 1] = data_number[sum_gap - 1];
            return array;
        }
        [WebMethod]
        public static int Query1(int id1)//连接数据库，查询前id条isUse='y'的信息的条数
        {
            string connectionString = "Data Source=.;Initial Catalog=test;Integrated Security=True;";//连接地址
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                DataSet ds = new DataSet();
                try
                {
                    connection.Open();
                    SqlCommand sqlCom = new SqlCommand();
                    sqlCom.Connection = connection;

                    sqlCom.CommandText = "SELECT [id],[name] ,[isUse] FROM [dbo].[line] where [isUse]='y' and [id]<=" + id1;
                    string strSql = sqlCom.CommandText;
                    SqlDataAdapter command = new SqlDataAdapter(strSql, connection);
                    command.Fill(ds, "ds");
                }
                catch (System.Data.SqlClient.SqlException ex)
                {
                    throw new Exception(ex.Message);
                }
                if (ds.Tables[0] != null)
                {
                    DataTable dt = new DataTable();
                    dt = ds.Tables[0];
                    return dt.Rows.Count;
                }
                else
                    return 0;
            }
        }


        [WebMethod]
        public static DataTable Query(string SQLString)//连接数据库，使用sql语句进行查询，返回第一个数据表，数据集为空则返回null
        {
            string connectionString = "Data Source=.;Initial Catalog=test;Integrated Security=True;";//连接地址
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                DataSet ds = new DataSet();
                try
                {
                    connection.Open();
                    SqlDataAdapter command = new SqlDataAdapter(SQLString, connection);
                    command.Fill(ds, "ds");
                }
                catch (System.Data.SqlClient.SqlException ex)
                {
                    throw new Exception(ex.Message);
                }
                if (ds.Tables[0] != null)
                    return ds.Tables[0];
                else
                    return null;

            }
        }
    }
}